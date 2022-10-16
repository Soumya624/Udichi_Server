const QuestionSubmissionSchema = require("../../models/Submission");

const getQuestionSubmissionById = async (req, res) => {
	try {
		QuestionSubmissionSchema.findById(req.params.id)
			.then((data) => {
				if (data === null) return res.status(404).send("Not Found");
				res.status(201).send({
					data,
				});
			})
			.catch((err) => {
				res.status(500).json(err.message);
			});
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = getQuestionSubmissionById;
