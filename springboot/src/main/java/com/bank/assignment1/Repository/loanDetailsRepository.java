package com.bank.assignment1.Repository;

import com.bank.assignment1.Entity.loanDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface loanDetailsRepository extends JpaRepository<loanDetails, Integer> {
}
