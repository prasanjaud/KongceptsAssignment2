package com.bank.assignment1.Repository;

import com.bank.assignment1.Entity.customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface customerRepository extends JpaRepository<customer, Integer> {
}
