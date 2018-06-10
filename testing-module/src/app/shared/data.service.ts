export class DataService {
    getDetails() {
        const resultPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1000)
        });

        return resultPromise;
    }
}