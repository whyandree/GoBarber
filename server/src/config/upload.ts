import path from 'path'; // interna do node
import crypto from 'crypto'; // interna do node
import multer from 'multer';

const tempFolder = path.resolve(__dirname, '..', '..', 'temp');

// Configurando o upload do arquivo do avatar
export default {
  directory: tempFolder,

  storage: multer.diskStorage({
    destination: tempFolder, // Passando o diretoria para o armazenamento.
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX'); // Gerando um hash.
      const filename = `${fileHash}-${file.originalname}`; // Concatenção do hash com o nome do arquivo.

      return callback(null, filename);
    },
  }),
};
