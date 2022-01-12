import { Router } from "express";

import { vxtelRoutes } from "./vxtel.routes";

const router = Router();

router.use("/", vxtelRoutes);

export { router };
