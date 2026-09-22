import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const primaryColor = rgb(0.12, 0.23, 0.54); // Dark Blue
  const textDark = rgb(0.15, 0.17, 0.21);     // Slate 900
  const textMuted = rgb(0.35, 0.40, 0.47);    // Slate 600
  const dividerColor = rgb(0.80, 0.83, 0.88); // Slate 300

  let page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  const { width, height } = page.getSize();
  const margin = 45;
  let y = height - margin;

  function checkPageBreak(neededHeight) {
    if (y - neededHeight < margin) {
      page = pdfDoc.addPage([595.28, 841.89]);
      y = height - margin;
    }
  }

  // Draw Header
  // Name
  page.drawText('SULIH', {
    x: margin,
    y: y - 24,
    size: 26,
    font: fontBold,
    color: primaryColor,
  });
  y -= 32;

  // Contact Info
  const contactText = '+6285728818103  |  sulih055@gmail.com  |  Bekasi, Indonesia';
  page.drawText(contactText, {
    x: margin,
    y: y - 10,
    size: 10,
    font: fontRegular,
    color: textMuted,
  });
  y -= 16;

  // LinkedIn
  const linkedinText = 'https://www.linkedin.com/in/sulih-aa749313b';
  page.drawText(linkedinText, {
    x: margin,
    y: y - 10,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.15, 0.45, 0.82),
  });
  y -= 22;

  // Horizontal Header Divider
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 1.5,
    color: primaryColor,
  });
  y -= 20;

  // Helper for Section Titles
  function drawSectionHeader(title) {
    checkPageBreak(35);
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y - 12,
      size: 13,
      font: fontBold,
      color: primaryColor,
    });
    y -= 16;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.75,
      color: dividerColor,
    });
    y -= 15;
  }

  // Helper for Wrapped Paragraph
  function drawWrappedText(text, fontSize, font, color, maxW, leading = 1.35) {
    const words = text.split(' ');
    let line = '';
    const lineHeight = fontSize * leading;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > maxW && n > 0) {
        checkPageBreak(lineHeight + 4);
        page.drawText(line.trim(), {
          x: margin,
          y: y - fontSize,
          size: fontSize,
          font: font,
          color: color,
        });
        y -= lineHeight;
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    if (line.trim().length > 0) {
      checkPageBreak(lineHeight + 4);
      page.drawText(line.trim(), {
        x: margin,
        y: y - fontSize,
        size: fontSize,
        font: font,
        color: color,
      });
      y -= lineHeight;
    }
  }

  // Helper for Bullet Points
  function drawBulletPoint(text, fontSize, font, color, maxW) {
    const bulletIndent = 14;
    const contentMaxW = maxW - bulletIndent;
    const words = text.split(' ');
    let line = '';
    const lineHeight = fontSize * 1.35;

    let isFirstLine = true;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const testWidth = font.widthOfTextAtSize(testLine, fontSize);
      if (testWidth > contentMaxW && n > 0) {
        checkPageBreak(lineHeight + 2);
        if (isFirstLine) {
          page.drawText('•', {
            x: margin + 3,
            y: y - fontSize,
            size: fontSize + 1,
            font: fontBold,
            color: primaryColor,
          });
        }
        page.drawText(line.trim(), {
          x: margin + bulletIndent,
          y: y - fontSize,
          size: fontSize,
          font: font,
          color: color,
        });
        y -= lineHeight;
        line = words[n] + ' ';
        isFirstLine = false;
      } else {
        line = testLine;
      }
    }
    if (line.trim().length > 0) {
      checkPageBreak(lineHeight + 2);
      if (isFirstLine) {
        page.drawText('•', {
          x: margin + 3,
          y: y - fontSize,
          size: fontSize + 1,
          font: fontBold,
          color: primaryColor,
        });
      }
      page.drawText(line.trim(), {
        x: margin + bulletIndent,
        y: y - fontSize,
        size: fontSize,
        font: font,
        color: color,
      });
      y -= lineHeight;
    }
    y -= 2; // slight gap after bullet point
  }

  // SECTION: ABOUT / SUMMARY
  drawSectionHeader('Profile Summary');
  const summaryText = 'Alumni of STMIK-AUB Surakarta majoring in System Information. An individual who has a strong interest in technology, especially programming. Specializing in software and application development with extensive industry experience. Proficient in PHP, JavaScript, TypeScript, and Java for Web Development. With adept utilization of various development tools and frameworks. Experienced in crafting modern user interfaces, alongside expertise in developing back-end systems including API creation, database management, and server performance optimization. Highly curious and driven to continuously learn and develop professionally.';
  drawWrappedText(summaryText, 9.5, fontRegular, textDark, width - margin * 2);
  y -= 12;

  // SECTION: SKILLS & COMPETENCIES
  drawSectionHeader('Skill and Competencies');
  const skillIntro = 'Experienced in designing efficient and scalable software architectures, utilizing various development tools and frameworks:';
  drawWrappedText(skillIntro, 9.5, fontRegular, textDark, width - margin * 2);
  y -= 6;
  const skillsList = 'HTML, CSS, PHP, JavaScript, Node.js, TypeScript, Java, MySQL, PostgreSQL, SQL Server, MongoDB';
  drawWrappedText(skillsList, 9.5, fontBold, primaryColor, width - margin * 2);
  y -= 14;

  // SECTION: PROJECTS
  drawSectionHeader('Key Projects & Experience');

  const projectsData = [
    {
      title: 'Pusdatin Aset BPAD DKI Jakarta',
      role: 'Full Stack Developer',
      bullets: [
        'Utilized Vue.js and Tailwind CSS to design and develop e-reklame CMS, e-reklame Mitra, LBMD, and MPSBMD applications.',
        'Implemented APIs using Postman for testing and documentation, and utilized Docker containers to generate public URLs for API integration testing.',
        'Collaborated closely with cross-functional teams to develop and deploy application versions that streamline workflow and user operations.'
      ]
    },
    {
      title: 'RSUD Jati Padang',
      role: 'Developer',
      bullets: [
        'Utilized PHP and Bootstrap to design and develop employee and staffing management modules.',
        'Implemented and structured MySQL database schemas for reliable data storage and high-performance querying.',
        'Developed REST APIs using Postman for testing and documentation, utilizing Docker for API testing environments.',
        'Collaborated closely with system team to develop and maintain healthcare service features.'
      ]
    },
    {
      title: 'RS Jantung Jakarta',
      role: 'Developer',
      bullets: [
        'Utilized Laravel and Bootstrap framework to design and develop the main hospital portal and administrative web application.',
        'Implemented MySQL database architecture for data persistence and patient management.',
        'Implemented custom WhatsApp API integration for automated appointment reminders and notification delivery.',
        'Implemented RESTful APIs for mobile application doctor appointment scheduling.',
        'Collaborated closely with team to simplify user processes for searching medical info and doctor consultation appointments.'
      ]
    },
    {
      title: 'QDC Technologies',
      role: 'Developer',
      bullets: [
        'Utilized Laravel and Bootstrap to design and develop enterprise web platforms.',
        'Implemented MySQL database solutions for transaction and enterprise data management.',
        'Implemented scalable API services for ERP enterprise system integration.',
        'Collaborated closely with core engineering team to deliver robust software solutions.'
      ]
    }
  ];

  for (const proj of projectsData) {
    checkPageBreak(40);
    // Project Title & Role
    page.drawText(proj.title, {
      x: margin,
      y: y - 11,
      size: 11,
      font: fontBold,
      color: textDark,
    });
    
    const roleWidth = fontOblique.widthOfTextAtSize(proj.role, 9.5);
    page.drawText(proj.role, {
      x: width - margin - roleWidth,
      y: y - 11,
      size: 9.5,
      font: fontOblique,
      color: primaryColor,
    });
    y -= 18;

    for (const bullet of proj.bullets) {
      drawBulletPoint(bullet, 9, fontRegular, textDark, width - margin * 2);
    }
    y -= 8;
  }

  const pdfBytes = await pdfDoc.save();
  const targetPath = path.join(process.cwd(), 'public', 'cv-sulih-fullstack.pdf');
  fs.writeFileSync(targetPath, pdfBytes);
  console.log('Successfully generated PDF at:', targetPath, 'Bytes:', pdfBytes.length);
}

generateCV().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
