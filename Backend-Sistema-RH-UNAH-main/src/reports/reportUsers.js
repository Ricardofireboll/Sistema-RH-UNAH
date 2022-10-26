const  PDFDocumento  =  require ( 'pdfkit' ) ;
const  fs  =  require ( 'fs' ) ;

function cuerpoPDF(dataCallback, endCallback) {
    const  doc  =  new  PDFDocument ( ) ;
    doc.on('data',dataCallback);
    doc.on('end',endCallback);
    doc
    .font('fonts/PalatinoBold.ttf')
    .fontSize(25)
    .text('Some text with an embedded font!', 100, 100);
    doc.end();
}

module.exports ={ cuerpoPDF};