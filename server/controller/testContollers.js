const testing = async (req, res) => { 
    try {
        console.log("hii");
        res.json({ message: "Hii" }); 
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" }); 
    }
};

module.exports = { testing };
