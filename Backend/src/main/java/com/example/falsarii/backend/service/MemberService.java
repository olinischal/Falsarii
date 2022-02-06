package com.example.falsarii.backend.service;

import com.example.falsarii.backend.model.Member;

import java.util.List;


public interface MemberService {
    public Member saveMember(Member member);
    public List<Member> getAllMembers();

}
