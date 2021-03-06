import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn('varchar', { length: 250 })
    id!: string;

    @Column('varchar', { length: 250 })
    name!: string;

    @Column('varchar', { length: 250 })
    login!: string;

    @Column('varchar', { length: 250 })
    password!: string;

    constructor({
        id = uuid(),
        name = 'USER',
        login = 'user',
        password = 'P@55w0rd',
    } = {}) {
        this.id = id;

        this.name = name;

        this.login = login;

        this.password = password;
    }

    static toResponse(user: { id?: string | undefined; name?: string | undefined; login?: string | undefined; password?: string | undefined; }) {
        const { id, name, login } = user;
        return { id, name, login };
    }
};

export {
    User
}
