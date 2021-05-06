package com.zipgap.controller.detlController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.util.stream.Collectors.joining;

@RestController
public class CrawlController {
    @Autowired
    private RestTemplate rt;


    @GetMapping("/api/apt/image/{aptName}")
    public String RetrieveAptImage(@PathVariable String aptName) throws UnsupportedEncodingException {
        Map<String, String> requestParams = new HashMap<>();
        requestParams.put("key", "AIzaSyAF4J-247-5r3tTU0UzIDSQ3JD5XSW1upU");
        requestParams.put("cx", "0bc7d40ac5dcb2fe4");
        requestParams.put("searchType","image");
        requestParams.put("q", aptName);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf("application/json;charset=UTF-8"));
        HttpEntity entity = new HttpEntity<>(null, headers);


        String encodedURL = requestParams.keySet().stream()
                .map(key -> key + "=" + requestParams.get(key))
                .collect(joining("&", "https://customsearch.googleapis.com/customsearch/v1?", ""));

        ResponseEntity<String> response = rt.exchange(
                encodedURL,
                HttpMethod.GET,
                entity,
                String.class
        );
        String result = response.getBody();
        String regEx = "\"link\": \"(.*)\"";



        // 정규식(regEx)을 패턴으로 만들고,
        Pattern pat = Pattern.compile(regEx);
        Matcher match = pat.matcher(response.getBody());

        if(match.find()) {
            return match.group(1);
        }
        return "";
    }
}
