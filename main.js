// pseudo code

// example: 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// this should all be a single regex..

// replace first occurence of numbers with empty text
  // _FILE_NAME.EXTENSION.OTHEREXTENSION

// delete everything after the SECOND period.
  // _FILE_NAME.EXTENSION

// delete first underscore first underscore
// FILE_NAME.EXTENSION

class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    dirtyFileName = dirtyFileName.replace(/\d+/, '');
    dirtyFileName = dirtyFileName.replace(/\.[^\.]*$/, '');

    if (dirtyFileName.indexOf('_') === 0) {
      dirtyFileName = dirtyFileName.replace('_', '');
    }

    return dirtyFileName
  }
}

FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34");