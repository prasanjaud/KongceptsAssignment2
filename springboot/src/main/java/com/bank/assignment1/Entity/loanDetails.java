package com.bank.assignment1.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class loanDetails {

    @Id
    @GeneratedValue
    private int ld_id;
    private float amount;
    private String description;
    private String date;
    private String approveStatus;
}
