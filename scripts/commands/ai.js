//@Jenica: this ai command is no longer working, please update it with a working api endpoint.

const axios = require("axios");

module.exports = {
    config: {
        name: "kazuma",
        description: "Interact with an kazuma AI to get responses to your questions.",
        usage: "kazuma <question>"

    }, 

    onCommand: async ({ api, event, args, box }) => {
        const question = args.join(" ");

        if (question) {
            try {
                const response = await axios.get(`https://kazumaoff-peachwings.replit.app/api/gpt?query=${encodeURIComponent(question)}`);
                const aiResponse = response.data.result;
                box.reply(aiResponse);
            } catch (error) {
                console.error("Error fetching AI response:", error);
                box.reply("Failed to get AI response. Please try again later.");
            }
        } else {
            box.reply("Please provide a question after the command. For example: `>kazuma what is life`");
        }
    }
};
