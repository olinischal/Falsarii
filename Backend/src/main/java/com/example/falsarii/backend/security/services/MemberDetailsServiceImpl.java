package com.example.falsarii.backend.security.services;


import com.example.falsarii.backend.model.Member;
import com.example.falsarii.backend.repository.MemberRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MemberDetailsServiceImpl implements UserDetailsService {


    
    @Autowired
    MemberRepository memberRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
      Member member = memberRepository.findByEmail(email)
          .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + email));

      return MemberDetailsImpl.build(member);
    }
    
    



}
