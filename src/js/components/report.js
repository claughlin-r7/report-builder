import React from 'react';
import ReportCard from 'components/reportCard';
import jsPDF from 'jsPDF';
import FlatButton from 'material-ui/lib/flat-button';
import $ from 'jquery';

class Report extends React.Component {
    generatePDF() {
        let canvasToImage = (canvas) => {
            let backgroundColor = 'white';
            var w = canvas.width;
            var h = canvas.height;
            var data;
            let context = canvas.getContext("2d");
            if(backgroundColor) {
                //get the current ImageData for the canvas.
                data = context.getImageData(0, 0, w, h);
                //store the current globalCompositeOperation
                var compositeOperation = context.globalCompositeOperation;
                //set to draw behind current content
                context.globalCompositeOperation = "destination-over";
                //set background color
                context.fillStyle = backgroundColor;
                //draw background / rect on entire canvas
                context.fillRect(0,0,w,h);
            }
            //get the image data from the canvas
            var imageData = canvas.toDataURL("image/jpeg");
            if(backgroundColor) {
                //clear the canvas
                context.clearRect (0,0,w,h);
                //restore it with original / cached ImageData
                context.putImageData(data, 0,0);
                //reset the globalCompositeOperation to what it was
                context.globalCompositeOperation = compositeOperation;
            }
            //return the Base64 encoded data url string
            return imageData;
        };
        let doc = new jsPDF('p', 'mm');
        let canvasElements = $('canvas');
        for (var i = 0; i < canvasElements.length; i++) {
            if (i === 0) {
                doc.text('test test', 1, 0);
                doc.addImage(canvasToImage($('canvas').get(i)), 'JPEG', 1, 0, 200, 100);
            } else {
                doc.text('test test', 1, $('canvas').get(i -1).height + 1);
                doc.addImage(canvasToImage($('canvas').get(i)), 'JPEG', 1, $('canvas').get(i -1).height, 200, 100);
            }
        }
        doc.save('Test.pdf');
    }

    renderReportCard(card, index) {
        return (
            <ReportCard key={index} card={card} index={index}/>
        )
    }

    render() {
        return (
            <div style={{width: '80%', display: 'block', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
                <div className="cards">
                    {this.props.report.cards.map(this.renderReportCard)}
                </div>
                <button onClick={this.generatePDF}>Click me</button>
            </div>
        );
    }
}

export default Report;
