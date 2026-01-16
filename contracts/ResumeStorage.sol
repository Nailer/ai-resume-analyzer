// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ResumeStorage {
    struct Feedback {
        uint256 overallScore;
        uint256 atsCompatibilityScore;
        string[] atsIssues;
        uint256 jobMatchScore;
        string jobMatchAnalysis;
        uint256 toneAndStyleScore;
        uint256 contentScore;
        uint256 structureScore;
        uint256 technicalSkillsScore;
        string[] missingElements;
        string[] recommendations;
        string[] strengths;
        string[] weaknesses;
        uint256 timestamp;
    }

    struct FeedbackInput {
        uint256 overallScore;
        uint256 atsCompatibilityScore;
        string[] atsIssues;
        uint256 jobMatchScore;
        string jobMatchAnalysis;
        uint256 toneAndStyleScore;
        uint256 contentScore;
        uint256 structureScore;
        uint256 technicalSkillsScore;
        string[] missingElements;
        string[] recommendations;
        string[] strengths;
        string[] weaknesses;
    }

    // Mapping from user address to their list of feedbacks
    mapping(address => Feedback[]) public userFeedbacks;

    // Event definition
    event FeedbackStored(
        address indexed user,
        uint256 index,
        uint256 overallScore,
        uint256 timestamp
    );

    /**
     * @dev Stores a new resume analysis feedback for the caller.
     * @param _input The feedback data to store
     */
    function storeFeedback(FeedbackInput calldata _input) public {
        Feedback memory newFeedback = Feedback({
            overallScore: _input.overallScore,
            atsCompatibilityScore: _input.atsCompatibilityScore,
            atsIssues: _input.atsIssues,
            jobMatchScore: _input.jobMatchScore,
            jobMatchAnalysis: _input.jobMatchAnalysis,
            toneAndStyleScore: _input.toneAndStyleScore,
            contentScore: _input.contentScore,
            structureScore: _input.structureScore,
            technicalSkillsScore: _input.technicalSkillsScore,
            missingElements: _input.missingElements,
            recommendations: _input.recommendations,
            strengths: _input.strengths,
            weaknesses: _input.weaknesses,
            timestamp: block.timestamp
        });

        userFeedbacks[msg.sender].push(newFeedback);

        emit FeedbackStored(
            msg.sender,
            userFeedbacks[msg.sender].length - 1,
            _input.overallScore,
            block.timestamp
        );
    }

    /**
     * @dev Returns the number of feedbacks stored for a user.
     */
    function getUserFeedbackCount(address _user) public view returns (uint256) {
        return userFeedbacks[_user].length;
    }

    /**
     * @dev Returns a specific feedback for a user by index.
     */
    function getUserFeedback(
        address _user,
        uint256 _index
    ) public view returns (Feedback memory) {
        require(_index < userFeedbacks[_user].length, "Index out of bounds");
        return userFeedbacks[_user][_index];
    }
}
