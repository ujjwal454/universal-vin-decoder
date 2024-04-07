interface VINInfo {
    wmi: string;
    vds: string;
    vis: string;
    modelYear: string;
    manufacturer?: string;
}
interface VINDecoded {
    vin: string;
    isValid: boolean;
    message?: string;
    info?: {
        region: string;
        country: string;
        modelYear: string;
        manufacturer: string;
    };
}
declare const validateVIN: (vin: string) => {
    isValid: boolean;
    error: string;
} | {
    isValid: boolean;
    error?: undefined;
};
declare const splitVIN: (vin: string) => VINInfo;
declare const manufacturersList: () => any;
declare const decodeVIN: (vin: string) => VINDecoded;

export { decodeVIN, manufacturersList, splitVIN, validateVIN };
