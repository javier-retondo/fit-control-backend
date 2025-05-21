import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateCrud(name, modelNameSingular, modelNamePlural) {
   const moduleDir = path.join(__dirname, '..', '..', 'src', 'dao', name);
   const crudDir = path.join(__dirname, '..', '..', 'src', 'dao', name, 'services');

   if (!fs.existsSync(moduleDir)) {
      console.error(`El modulo ${name} no existe.`);
      return;
   }

   fs.mkdirSync(crudDir, { recursive: true });

   const createContent = generateCreateContent(modelNameSingular, modelNamePlural);
   fs.writeFileSync(path.join(crudDir, 'create.ts'), createContent);

   const deleteContent = generateDeleteContent(modelNameSingular, modelNamePlural);
   fs.writeFileSync(path.join(crudDir, 'delete.ts'), deleteContent);

   const updateContent = generateUpdateContent(modelNameSingular, modelNamePlural);
   fs.writeFileSync(path.join(crudDir, 'update.ts'), updateContent);

   const patchContent = generatePatchContent(modelNameSingular, modelNamePlural);
   fs.writeFileSync(path.join(crudDir, 'patch.ts'), patchContent);

   fs.writeFileSync(path.join(moduleDir, 'find.ts'), '');

   console.log(`Las clases de crud del ${name} se generaron con éxito en ${crudDir}`);
   exec(`npx prettier --write ${crudDir}`, (error, stdout, stderr) => {
      if (error) {
         console.error(`Hubo un error al aplicar formato: ${stderr}`);
         return;
      }
      console.log(`Archivos formateados con éxito: ${stdout}`);
   });
}

function generateCreateContent(modelNameSingular, modelNamePlural) {
   return `
    import { I${capitalizeFirstLetter(modelNameSingular)} } from '../interface';
    import { ${capitalizeFirstLetter(modelNameSingular)} } from '../model';
    import { EntityCreator } from '../../../abstractions/sequelizeBases/baseCreate';
    import { ${toSnakeCase(modelNameSingular)} } from '../metadata';

    class ${capitalizeFirstLetter(modelNamePlural)}Creator extends EntityCreator<I${capitalizeFirstLetter(modelNameSingular)}> {
    model = ${capitalizeFirstLetter(modelNameSingular)};
    entityName = ${toSnakeCase(modelNameSingular)}.SINGULAR;
    }

    export const ${camellFirstLetter(modelNamePlural)}Creator = new ${capitalizeFirstLetter(modelNamePlural)}Creator();

    `;
}

function generateDeleteContent(modelNameSingular, modelNamePlural) {
   return `
    import { ${capitalizeFirstLetter(modelNameSingular)} } from '../model';
    import { EntityDeleter } from '../../../abstractions/sequelizeBases/baseDelete';
    import { ${toSnakeCase(modelNameSingular)} } from '../metadata';

    class ${capitalizeFirstLetter(modelNamePlural)}Deleter extends EntityDeleter {
    model = ${capitalizeFirstLetter(modelNameSingular)};
    entityName = ${toSnakeCase(modelNameSingular)}.SINGULAR;
    }

    export const ${camellFirstLetter(modelNamePlural)}Deleter = new ${capitalizeFirstLetter(modelNamePlural)}Deleter();
    `;
}

function generatePatchContent(modelNameSingular, modelNamePlural) {
   return `
    import { I${capitalizeFirstLetter(modelNameSingular)} } from '../interface';
    import { ${capitalizeFirstLetter(modelNameSingular)} } from '../model';
    import { ${toSnakeCase(modelNameSingular)} } from '../metadata';
    import { EntityPatcher } from '../../../abstractions/sequelizeBases/basePatch';

    class ${capitalizeFirstLetter(modelNamePlural)}Patcher extends EntityPatcher<I${capitalizeFirstLetter(modelNameSingular)}> {
    model = ${capitalizeFirstLetter(modelNameSingular)};
    entityName = ${toSnakeCase(modelNameSingular)}.SINGULAR;
    }

    export const ${camellFirstLetter(modelNamePlural)}Patcher = new ${capitalizeFirstLetter(modelNamePlural)}Patcher(); 
    `;
}

function generateUpdateContent(modelNameSingular, modelNamePlural) {
   return `
    import { I${capitalizeFirstLetter(modelNameSingular)} } from '../interface';
    import { ${capitalizeFirstLetter(modelNameSingular)} } from '../model';
    import { ${toSnakeCase(modelNameSingular)} } from '../metadata';
    import { EntityUpdater } from '../../../abstractions/sequelizeBases/baseUpdate';

    class ${capitalizeFirstLetter(modelNamePlural)}Updater extends EntityUpdater<I${capitalizeFirstLetter(modelNameSingular)}> {
    model = ${capitalizeFirstLetter(modelNameSingular)};
    entityName = ${toSnakeCase(modelNameSingular)}.SINGULAR;
    }

    export const ${camellFirstLetter(modelNamePlural)}Updater = new ${capitalizeFirstLetter(modelNamePlural)}Updater();
    `;
}

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}

function camellFirstLetter(string) {
   return string.charAt(0).toLowerCase() + string.slice(1);
}

function toSnakeCase(string) {
   return string
      .replace(/([A-Z])/g, '_$1')
      .toUpperCase()
      .replace(/^_/, '');
}

export default generateCrud;
