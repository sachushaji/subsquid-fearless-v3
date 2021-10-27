import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {FeesPaid} from "./feesPaid.model"

@Entity_()
export class Transfer {
  constructor(props?: Partial<Transfer>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: true})
  amount!: string | undefined | null

  @Column_("text", {nullable: true})
  to!: string | undefined | null

  @Column_("text", {nullable: true})
  from!: string | undefined | null

  @Index_()
  @ManyToOne_(() => FeesPaid, {nullable: true})
  fee!: FeesPaid | undefined | null

  @Column_("text", {nullable: true})
  eventIdx!: string | undefined | null

  @Column_("text", {nullable: false})
  extrinisicIdx!: string

  @Column_("bool", {nullable: true})
  success!: boolean | undefined | null
}