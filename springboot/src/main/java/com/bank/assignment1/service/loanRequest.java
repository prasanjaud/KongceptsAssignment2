package com.bank.assignment1.service;

import com.bank.assignment1.Entity.customer;
import com.bank.assignment1.Entity.loanTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class loanRequest {
    private customer customers;

}
