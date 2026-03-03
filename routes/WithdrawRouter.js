import express from 'express';

const router = express.Router();

router.get("/withdraw", (req, res, next) => {
    res
        .status(200)
        .render("withdraw", {
            layout: false,
            title: "Amount Withdraw Page",
        });
});

export default router;