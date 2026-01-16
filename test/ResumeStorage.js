const { expect } = require("chai");
const hre = require("hardhat");

describe("ResumeStorage", function () {
  let resumeStorage;
  let owner;
  let otherAccount;

  // Sample feedback data
  const sampleFeedback = {
    overallScore: 85,
    atsCompatibilityScore: 90,
    atsIssues: ["Keyword optimization needed", "Format issues"],
    jobMatchScore: 80,
    jobMatchAnalysis: "Good match for the role",
    toneAndStyleScore: 88,
    contentScore: 85,
    structureScore: 90,
    technicalSkillsScore: 95,
    missingElements: ["Project links"],
    recommendations: ["Add more quantifiable results"],
    strengths: ["Strong technical background", "Clear formatting"],
    weaknesses: ["Lack of leadership experience"]
  };

  beforeEach(async () => {
    [owner, otherAccount] = await hre.ethers.getSigners();
    const ResumeStorage = await hre.ethers.getContractFactory("ResumeStorage");
    resumeStorage = await ResumeStorage.deploy();
  });

  describe("Deployment", function () {
    it("Should start with 0 feedback count for any user", async function () {
      expect(await resumeStorage.getUserFeedbackCount(owner.address)).to.equal(0);
    });
  });

  describe("Storing Feedback", function () {
    it("Should allow a user to store feedback", async function () {
      await expect(resumeStorage.storeFeedback(sampleFeedback))
        .to.emit(resumeStorage, "FeedbackStored")
        .withArgs(owner.address, 0, sampleFeedback.overallScore, (val) => val > 0);
        
      expect(await resumeStorage.getUserFeedbackCount(owner.address)).to.equal(1);
    });

    it("Should store the correct details", async function () {
      await resumeStorage.storeFeedback(sampleFeedback);
      const storedFeedback = await resumeStorage.getUserFeedback(owner.address, 0);

      expect(storedFeedback.overallScore).to.equal(sampleFeedback.overallScore);
      expect(storedFeedback.atsCompatibilityScore).to.equal(sampleFeedback.atsCompatibilityScore);
      expect(storedFeedback.jobMatchAnalysis).to.equal(sampleFeedback.jobMatchAnalysis);
      // Check arrays
      expect(storedFeedback.atsIssues).to.deep.equal(sampleFeedback.atsIssues);
      expect(storedFeedback.strengths).to.deep.equal(sampleFeedback.strengths);
    });

    it("Should handle multiple feedbacks for the same user", async function () {
      await resumeStorage.storeFeedback(sampleFeedback);
      const secondFeedback = { ...sampleFeedback, overallScore: 90 };
      await resumeStorage.storeFeedback(secondFeedback);

      expect(await resumeStorage.getUserFeedbackCount(owner.address)).to.equal(2);
      
      const storedFirst = await resumeStorage.getUserFeedback(owner.address, 0);
      const storedSecond = await resumeStorage.getUserFeedback(owner.address, 1);
      
      expect(storedFirst.overallScore).to.equal(85);
      expect(storedSecond.overallScore).to.equal(90);
    });

    it("Should isolate data between different users", async function () {
      await resumeStorage.connect(owner).storeFeedback(sampleFeedback);
      
      const otherFeedback = { ...sampleFeedback, overallScore: 50 };
      await resumeStorage.connect(otherAccount).storeFeedback(otherFeedback);

      expect(await resumeStorage.getUserFeedbackCount(owner.address)).to.equal(1);
      expect(await resumeStorage.getUserFeedbackCount(otherAccount.address)).to.equal(1);

      const ownerData = await resumeStorage.getUserFeedback(owner.address, 0);
      const otherData = await resumeStorage.getUserFeedback(otherAccount.address, 0);

      expect(ownerData.overallScore).to.equal(85);
      expect(otherData.overallScore).to.equal(50);
    });
  });

  describe("Validation", function () {
    it("Should revert when accessing index out of bounds", async function () {
      await expect(resumeStorage.getUserFeedback(owner.address, 0))
        .to.be.revertedWith("Index out of bounds");
    });
  });
});
