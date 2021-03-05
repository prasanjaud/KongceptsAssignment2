package com.bank.assignment1.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class loanTypes {

    @Id
    @GeneratedValue
    private int lt_id;
    private String typeName;
    private float interestRate;
    private String duration;

    @OneToMany(targetEntity = loanDetails.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "lt_fk",referencedColumnName = "lt_id")
    private List<loanDetails> loanDetail;
}
