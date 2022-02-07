package com.example.falsarii.backend.controller;

    import com.example.falsarii.backend.model.Member;
    import com.example.falsarii.backend.service.MemberService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

@RestController
@RequestMapping("/member")
@CrossOrigin
public class MemberController {
    @Autowired
    private MemberService memberService;

    @PostMapping("/add")
    public String add(@RequestBody Member member){
        memberService.saveMember(member);
        return "New Member is added";
    }

    @GetMapping("/getAll")
    public List<Member> list(){
        return memberService.getAllMembers();
    }
}