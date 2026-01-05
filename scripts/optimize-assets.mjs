import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'public/assets';

// Files to optimize
const TARGET_FILES = [
    'amr.png',
    'بروفايل.jpg',
    'photoـamir.jpg',
    'ai.jpg',
    'IMG_0052.jpg',
    'kareem_yousry.jpeg',
    '1738272331493.jpeg'
];

async function optimize() {
    console.log('Starting optimization...');

    for (const file of TARGET_FILES) {
        const inputPath = path.join(ASSETS_DIR, file);
        if (!fs.existsSync(inputPath)) {
            console.warn(`File not found: ${inputPath}`);
            continue;
        }

        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const outputPath = path.join(ASSETS_DIR, `${basename}.webp`);

        try {
            const metadata = await sharp(inputPath).metadata();
            console.log(`Processing ${file} (${metadata.width}x${metadata.height})...`);

            // Resize only if width > 800px to save space, otherwise keep original
            // Using logic: if width > 800, resize to 800.
            const pipeline = sharp(inputPath);
            if (metadata.width > 800) {
                pipeline.resize({ width: 800 });
            }

            await pipeline
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`✅ Saved: ${outputPath}`);
        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error);
        }
    }
    console.log('Optimization complete!');
}

optimize();
