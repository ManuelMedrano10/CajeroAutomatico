import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { projectRoot } from './utils/paths.js';
import homeRouter from './routes/HomeRouter.js'
import { ValidAmount } from './utils/helpers/hbs/amountValidation.js';
import withdrawRouter from './routes/WithdrawRouter.js';
import { WithdrawEffective, Withdraw100_500, Withdraw200_1000 } from './utils/helpers/hbs/withdrawProcess.js'

const app = express();

//render engine config
app.engine("hbs", engine({ validAmount: ValidAmount,
                            Withdraw100_500: Withdraw100_500, 
                            withdraw200_1000: Withdraw200_1000, 
                            withdrawEffective: WithdrawEffective }));
app.set("view engine", "hbs");
app.set("views", "views");

//express configuration
app.use(express.urlencoded());
app.use(express.static(path.join(projectRoot, "public")));

//routes config
app.use(homeRouter);
app.use(withdrawRouter);


//404 event
app.use((req, res, next) => {
    res.status(404).render("404", { layout: false, title: "404 page" })
});

app.listen(7777);