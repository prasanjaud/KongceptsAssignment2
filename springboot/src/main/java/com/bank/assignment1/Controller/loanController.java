package com.bank.assignment1.Controller;

import com.bank.assignment1.Entity.AuthRequest;
import com.bank.assignment1.Entity.customer;
import com.bank.assignment1.Entity.loanDetails;
import com.bank.assignment1.Entity.loanTypes;
import com.bank.assignment1.Repository.customerRepository;
import com.bank.assignment1.Repository.loanDetailsRepository;
import com.bank.assignment1.Repository.loanTypesRepository;
import com.bank.assignment1.service.getLoanDetails;
import com.bank.assignment1.service.getLoanType;
import com.bank.assignment1.service.loanRequest;
import com.bank.assignment1.utill.JwtUtill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin( origins = "http://localhost:4200")

@RestController
public class loanController {

    @Autowired
    private customerRepository CusRepo;

    @Autowired
    private loanDetailsRepository LoanDetRepo;

    @Autowired
    private loanTypesRepository LoanTypRepo;

    @PostMapping("/save")
    public customer save(@RequestBody loanRequest request){

        return CusRepo.save(request.getCustomers());
    }

    @PostMapping("/saveCus")
    public customer save(@RequestBody customer request){

        return CusRepo.save(request);
    }

    @PostMapping("/addLoanType")
    public loanTypes add(@RequestBody getLoanType request){

        return LoanTypRepo.save(request.getLoanType());
    }

    @GetMapping("/loanTypes")
    public List<loanTypes> findAllTypes(){
        return LoanTypRepo.findAll();
    }

    @PostMapping("/addLoanDetails")
    public loanDetails add(@RequestBody getLoanDetails request){
        return LoanDetRepo.save(request.getLoanDetail());
    }

    @GetMapping("/allcustomers")
    public List<customer> findAll(){

        return CusRepo.findAll();
    }

    @GetMapping("/customers/{id}")
    public customer get(Integer id){
        return CusRepo.findById(id).get();
    }

    @Autowired
    private JwtUtill jwtUtill;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/")
    public String welcome(){
        return "Welcome halooooo";
    }

    @PostMapping("/authenticate")
    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception{
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword())
            );
        }catch (Exception e){
            throw new Exception("Invalid");
        }
        return jwtUtill.generateToken(authRequest.getUserName());
    }

}
