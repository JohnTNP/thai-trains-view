export type Train = {
    kid: string;
    new: number;
    train_type: string;
    train_type_eng: string;
    traintypeid: number;
    trains_no: number;
    train_status: number;
    traindate: string;
    line: number;
    from: string;
    fromen: string;
    fromch: string;
    to: string;
    toen: string;
    toch: string;
    station_code: number;
    station_name: string;
    station_name_eng: string;
    station_name_ch: string;
    stopno: number;
    fullarrtime: string;
    arrtime: string;
    arrlate: number | string; // Assuming stringOrNumberToNumber can return either
    deptime: string;
    fulldeptime: string;
    deplate: number;
    insert: string;
    rundate: string;
};

export type TrainData = {
    data: Train[];
};