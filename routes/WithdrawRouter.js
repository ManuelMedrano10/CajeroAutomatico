import express from 'express';

const router = express.Router();

router.get("/withdraw", (req, res, next) => {
    res.redirect("/");
});

export default router;