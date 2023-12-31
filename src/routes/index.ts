import { readdirSync } from "fs";
import { Router } from "express";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`loading route... /${cleanName} `);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
