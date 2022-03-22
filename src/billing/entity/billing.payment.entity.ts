import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { BillingEntity } from "./billing.entity";
import { BillingPaymentStatusEntity } from "./billing.payment.status.entity";

@Entity({ name: "billing_payments" })
export class BillingPaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "amount" })
  amount: number;

  @Column({ name: "qb_payment_id" })
  qbPaymentIId: string;

  @Column({ name: "payment_date" })
  paymentDate: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;

  @ManyToOne(() => BillingEntity, (billing) => billing.payments)
  billing: BillingEntity

  @ManyToOne(() => BillingPaymentStatusEntity, (status) => status.billing_payments)
  status: BillingPaymentStatusEntity
}
