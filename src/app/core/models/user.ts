export class User {
    static count = 10;
    constructor(
        public id = 0, 
        public firstName = '', 
        public lastName = '',
        public email = '',
        public password = '',
        public dob = '',
        public gender = '',
        public interest = '',
        public address = '',
        public phone = '',
        public role = ''

                ) { } 
}
