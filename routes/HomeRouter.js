import express from 'express';
import { WithdrawCashMode } from '../utils/enums/WithdrawMode.js';
import { ValidAmount } from '../utils/helpers/hbs/amountValidation.js';
import { WithdrawEffective, Withdraw100_500, Withdraw200_1000 } from '../utils/helpers/hbs/withdrawProcess.js'

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).render("index", { layout: false, title: "Home" });
});

router.post("/", (req, res, next) => {
    const amountToWithdraw = parseInt(req.body.Amount);

    if (ValidAmount(amountToWithdraw)) {
        switch (Number(req.body.mode)) {
            case WithdrawCashMode.EFFECTIVE:
                WithdrawEffective(amountToWithdraw);
                break;

            case WithdrawCashMode.CASH_200_1000:
                Withdraw200_1000(amountToWithdraw);
                break;

            case WithdrawCashMode.CASH_100_500:
                Withdraw100_500(amountToWithdraw);
                break;
        }
    }

    res.redirect("/withdraw");
});

export default router;