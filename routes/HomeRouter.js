import express from 'express';
import { WithdrawProcess } from '../utils/helpers/hbs/withdrawProcess.js'

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).render("index", { layout: false, title: "ATM", error: null });
});

router.post("/", (req, res, next) => {
    const amountToWithdraw = parseInt(req.body.Amount);
    const mode = parseInt(req.body.mode);

    const result = WithdrawProcess(amountToWithdraw, mode);

    if (result.restante > 0) {
        return res.render("index", {
            layout: false,
            title: "Cajero Automático",
            error: "El modo de dispensación seleccionado no puede cubrir este monto exacto."
        });
    }

    res.render("withdraw", {
        layout: false,
        title: "Retiro Exitoso",
        amount: amountToWithdraw,
        papeletas: result.papeletas,
        papeleta1000: result.papeletas[1000].valueOf() > 0,
        papeleta500: result.papeletas[500].valueOf() > 0,
        papeleta200: result.papeletas[200].valueOf() > 0,
        papeleta100: result.papeletas[100].valueOf() > 0
    });
});

export default router;