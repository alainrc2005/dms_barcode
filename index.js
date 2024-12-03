import { DOMImplementation, XMLSerializer } from 'xmldom'
import JsBarcode from 'jsbarcode'

const xmlSerializer = new XMLSerializer()
const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null)
const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg')

JsBarcode(svgNode, 'D123456', {
   xmlDocument: document,
   height: 40,
   margin: 5
})

const svgText = xmlSerializer.serializeToString(svgNode)
console.log(svgText)
