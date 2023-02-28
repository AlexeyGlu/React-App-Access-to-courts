import { read, utils } from 'xlsx';

export let getListCourts = async (url) => {
        let res = await (await fetch(url)).arrayBuffer();
        let workBook = read(res);
        let workSheets = workBook.Sheets
        let data = utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]).slice(1);
        return data;
    }