export default function whatFileType(fileName: string): string {
  const fileType = fileName.split('.')[1];

  switch (true) {
    case ['xlsx', 'xls'].includes(fileType):
      return 'excel';
    case ['ppt', 'pptx'].includes(fileType):
      return 'powerPoint';
    case ['doc', 'docx'].includes(fileType):
      return 'word';
    case ['pdf'].includes(fileType):
      return 'pdf';
    default:
      return 'default';
  }
}
