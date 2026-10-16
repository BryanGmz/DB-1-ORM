import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'autor', schema: 'public' })
export class Autor {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id_autor' })
  idAutor?: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100 })
  nombre?: string;

  @Column({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @Column({
    type: 'timestamp',
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @Column({
    type: 'timestamp',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date;
  deleteAt?: Date;

  // libros: Libro[];
}
