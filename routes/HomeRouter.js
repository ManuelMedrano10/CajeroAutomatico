import express from 'express';
import { ValidAmount } from '../utils/helpers/hbs/amountValidation.js';
import { WithdrawProcess } from '../utils/helpers/hbs/withdrawProcess.js'

const router = express.Router();
export let result = {};

router.get("/", (req, res, next) => {
    res.status(200).render("index", { layout: false, title: "Home" });
});

router.post("/", (req, res, next) => {
    const amountToWithdraw = parseInt(req.body.Amount);
    const mode = parseInt(req.body.mode);

    if (ValidAmount(amountToWithdraw)) {
        result = WithdrawProcess(amountToWithdraw, mode);
    } else {
        res.render("index", {layput: false, error: "El monto es incorrecto"})
    }

    res.redirect("/withdraw");
});

export default router;