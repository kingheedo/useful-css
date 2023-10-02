export const dummyApiScan = () => {
  // https://5e41d55f-ee74-4237-b408-f8d94dbef2a6.mock.pstmn.io/scan
  // body = { deviceKey: device1 }
  return ({
    'profileNo': 402,
    'devices': [
      {
        'productName': 'MADLN05BE',
        'productImage': ('iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZ' + 
          'cwAADsMAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII='),
        'vendorName': 'OMRON Corporation',
        'vendorImage': ('iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAA' + 
          'DsMAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII='),
        'vendorId': '0x00AAA555',
        'productCode': '0x10002003',
        'revisionNo': '0x00000001',
        'stationAlias': '0x00000000'
      },
      {
        'productName': 'UNI_ECAT60B_2X',
        'productImage': ('iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADs' + 
          'MAAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII='),
        'vendorName': 'eMotionTek',
        'vendorImage': ('iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsM' + 
          'AAA7DAcdvqGQAAAAMSURBVBhXY/j//z8ABf4C/qc1gYQAAAAASUVORK5CYII='),
        'vendorId': '0x00000083',
        'productCode': '0x000000AE',
        'revisionNo': '0x00010001',
        'stationAlias': '0x00000005'
      }
    ]
  });
};