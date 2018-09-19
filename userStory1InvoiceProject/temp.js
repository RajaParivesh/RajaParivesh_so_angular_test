
  // Get Numbers for ASCII digits
  function getNumberFromASCII(ASCIIMap){
    const numberSignature = {
      '000000011' : '1',
      '001222010' : '2',
      '000222011' : '3',
      '010020011' : '4',
      '010222001' : '5',
      '011222001' : '6',
      '000200011' : '7',
      '011222011' : '8',
      '010222011' : '9',
      '011202011' : '0'
    }
    return numberSignature[ASCIIMap];
  }

  // Map characters to number
  function mapCharactersToNumbers(line) {
    const characters = {
      'space': 0,
      'pipe': 1,
      'underscore': 2
    }

    const l = [];
    for (const charIndex in line) {
      switch (line[charIndex]){
        case ' ':
          l[charIndex] = characters.space;
          break;
        case '|':
          l[charIndex] = characters.pipe;
          break;
        case '_':
          l[charIndex] = characters.underscore;
          break;
      }
    }                          
    return l;
  }


  // File Download
  function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      pom.dispatchEvent(event);
    }
    else {
      pom.click();
    }
  }



module.exports = { mapCharactersToNumbers, getNumberFromASCII, download}  
