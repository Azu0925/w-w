const spreadSheet = SpreadsheetApp.openById(SPREAD_SHEET_ID)
const sheet = spreadSheet.getSheets()[0]

function doGet() {
  const answerList: string[] = []
  const max = maxLine()
  const answerLine = Math.floor(Math.random() * (max + 1 - 1)) + 1
  const insertNumber = Math.floor(Math.random() * 4)
  const usedLineNumberList: number[] = [answerLine]

  for (let i = 0; i < 4; i++) {
    if (i === insertNumber) {
      answerList.push(String(sheet.getRange('B' + String(answerLine)).getValue()))
      continue
    }
    const lineNumber = randomNum(usedLineNumberList, max)
    answerList.push(String(sheet.getRange('B' + String(lineNumber)).getValue()))
    usedLineNumberList.push(lineNumber)
  }

  const response = ContentService.createTextOutput()
  response.setMimeType(ContentService.MimeType.JSON)
  response.setContent(
    JSON.stringify({
      question: String(sheet.getRange('A' + String(answerLine)).getValue()),
      answerList: answerList,
      answerNumber: insertNumber,
    })
  )

  return response
}

function maxLine(): number {
  return Number(sheet.getRange('I3').getValue())
}

function randomNum(notUseNumberList: number[], max: number): number {
  let number = Math.floor(Math.random() * (max + 1 - 1)) + 1
  notUseNumberList.forEach((element) => {
    if (number === element) {
      number = randomNum(notUseNumberList, max)
    }
  })
  return number
}
