import QRCode from 'qrcode';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'Swara', slug: 'Swara' },
  { name: 'Go Green Seaweed', slug: 'Go-Green-Seaweed' },
  { name: 'Asali Sona', slug: 'Asali-Sona' },
  { name: 'Humic 20', slug: 'Humic-20' },
  { name: 'Go Green Atharv', slug: 'Go-Green-Atharv' },
  { name: 'G Humic Power', slug: 'G-Humic-Power' },
  { name: 'Giagro Granules', slug: 'Giagro-Granules' },
  { name: 'Giagro Viagro Royal Veggidrip', slug: 'Giagro-Viagro-Royal-Veggidrip' }
];

const baseUrl = 'https://gia-crop-care.vercel.app/';

async function generatePDFs() {
  for (const page of pages) {
    const url = baseUrl + page.slug;
    
    try {
      // Generate QR Code as Data URI
      const qrDataUrl = await QRCode.toDataURL(url, { margin: 2, scale: 10 });
      
      // Create PDF
      const doc = new PDFDocument({ size: 'A4' });
      const sanitizedName = page.name.replace(/\//g, ' ');
      const pdfPath = path.join(process.cwd(), 'qr cods', `${sanitizedName}.pdf`);
      
      doc.pipe(fs.createWriteStream(pdfPath));
      
      doc.fontSize(25).text(page.name, { align: 'center' });
      doc.moveDown();
      doc.fontSize(12).text(url, { align: 'center', color: 'blue' });
      doc.moveDown();
      
      // Add QR Code image
      doc.image(qrDataUrl, (doc.page.width - 300) / 2, doc.y, { width: 300 });
      
      doc.end();
      console.log(`Generated ${sanitizedName}.pdf`);
    } catch (err) {
      console.error(`Error generating for ${page.name}:`, err);
    }
  }
}

generatePDFs();
