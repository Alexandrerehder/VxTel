import { CallPriceController } from "@modules/infra/http/controllers/CallPriceController";
import { ListDDDsController } from "@modules/infra/http/controllers/ListDDDsController";
import { ListHistoryController } from "@modules/infra/http/controllers/ListHistoryController";
import { ListPlanosController } from "@modules/infra/http/controllers/ListPlanosController";
import { Router } from "express";

const vxtelRoutes = Router();

const listDDDsController = new ListDDDsController();

const callPriceController = new CallPriceController();

const listPlanosController = new ListPlanosController();

const listHistoryController = new ListHistoryController();

vxtelRoutes.get("/ddds", listDDDsController.handle);

vxtelRoutes.get("/plans", listPlanosController.handle);

vxtelRoutes.post("/price", callPriceController.handle);

vxtelRoutes.get("/history", listHistoryController.handle);

export { vxtelRoutes };
