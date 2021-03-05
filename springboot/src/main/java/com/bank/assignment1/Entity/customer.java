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
public class customer {

    @Id
    @GeneratedValue
    private int id;
    private String fname;
    private String lname;
    private String gender;
    private String email;
    private String address;
    private String password;

    @OneToMany(targetEntity = loanDetails.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "cid_fk",referencedColumnName = "id")
    private List<loanDetails> loanDetail;
}
