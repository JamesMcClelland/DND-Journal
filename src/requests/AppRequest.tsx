const baseUrl = "http://localhost:3004";

export class AppRequest {
    async makeRequest(method :string, uri: string, data = {}) {
        let options = {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        };

        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            options = Object.assign(options, {body:  JSON.stringify(data)});
        }

        const response = await fetch(baseUrl+uri, Object.assign(options));

        return response.json();
    }

    async get(uri :string, data: {} = {}) {
        return this.makeRequest('GET', uri, data);
    }

    async post(uri :string, data = {}) {
        return this.makeRequest('POST', uri, data);
    }

    async put(uri :string, data = {}) {
        return this.makeRequest('PUT', uri, data);
    }

    async delete(uri :string, data = {}) {
        return this.makeRequest('DELETE', uri, data);
    }
}