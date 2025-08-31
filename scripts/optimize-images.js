const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/gallery';
const outputDir = './public/gallery-optimized';

// Criar diretórios se não existirem
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
if (!fs.existsSync(`${outputDir}/thumbnails`)) {
  fs.mkdirSync(`${outputDir}/thumbnails`, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const name = path.parse(file).name;
    
    console.log(`Processando: ${file}`);

    try {
      // Thumbnail 400x300 WebP
      await sharp(inputPath)
        .resize(400, 300, { fit: 'cover' })
        .webp({ quality: 80 })
        .toFile(`${outputDir}/thumbnails/${name}.webp`);

      // Thumbnail 400x300 JPEG fallback
      await sharp(inputPath)
        .resize(400, 300, { fit: 'cover' })
        .jpeg({ quality: 85 })
        .toFile(`${outputDir}/thumbnails/${name}.jpg`);

      // Full size 1200x900 WebP
      await sharp(inputPath)
        .resize(1200, 900, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(`${outputDir}/${name}.webp`);

      // Full size 1200x900 JPEG fallback
      await sharp(inputPath)
        .resize(1200, 900, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 90 })
        .toFile(`${outputDir}/${name}.jpg`);

      console.log(`✅ ${file} processado`);
    } catch (error) {
      console.error(`❌ Erro ao processar ${file}:`, error);
    }
  }

  console.log('\n🎉 Otimização completa!');
  console.log('Agora atualize os caminhos em gallery.js para usar as imagens otimizadas.');
}

optimizeImages();