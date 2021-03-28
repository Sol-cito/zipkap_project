## 롬복 (Lombok)

롬복은 **반복되는 Java 코드를 @ 어노테이션을 이용하여 획기적으로 줄여주는 Library이다.**

모든 Java코드를 줄여주는 것이 아니라, **DTO(Data Transfer Object)**에 자주 쓰이는 녀석들을 줄여준다.

가령,

- 생성자
- Getter/Setter
- ToString

등등을 줄여준다...

롬복의 장점은

1. **손쉬운 코드 리펙토링**

2. **Log기능 제공**
3. **Null체크 제공**

등등...이 있다. 

예를 들어보면

```java
package com.solcito.springboot.dto;

public class Car {
    String name;
    String price;

    public Car(String name, String price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Car{" +
                "name='" + name + '\'' +
                ", price='" + price + '\'' +
                '}';
    }
}

```

위와 같은 코드가 있을 때,

롬복 으로 아래와 같이 줄일 수 있다.

```java
package com.solcito.springboot.dto;


import lombok.Data;

@Data
public class Car {
    String name;
    String price;
}

```

이게 끝이다!

@Data를 타고들어가보면 어노테이션 인터페이스가 보이는데,

```
/**
 * Generates getters for all fields, a useful toString method, and hashCode and equals implementations that check
 * all non-transient fields. Will also generate setters for all non-final fields, as well as a constructor.
 * <p>
 * Equivalent to {@code @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode}.
 * <p>
 * Complete documentation is found at <a href="https://projectlombok.org/features/Data">the project lombok features page for &#64;Data</a>.
 * 
 * @see Getter
 * @see Setter
 * @see RequiredArgsConstructor
 * @see ToString
 * @see EqualsAndHashCode
 * @see lombok.Value
 */
```

라고 되어있다.

즉 @**Data**는 {@code **@Getter @Setter @RequiredArgsConstructor** @ToString @EqualsAndHashCode} 이 어노테이션들의 모음이라는 뜻이고, 

안에 Getter, Setter, RequiredArgsConstructor  등 필요한 코드 묶음이 다 들어있음을 확인할 수 있다.

<br>

위 기능 뿐 아니라, **@Log 를 사용하여 Log를 남길 수도 있다.**

사용법은 아래와 같다.

```java
@Data
@Log
public class Car {
    String name;
    String price;

    public void makeLog(){
        log.info("이건 로그다");
    }
}
```

이 외에도 **@Builder, @NotNull**등의 유용한 어노테이션이 가능하다고 하니,

Java 개발 생산성을 높이는 데 필수적인 도구라고 할 수 있을 것이다.

<br>

[유투브 동영상](https://www.youtube.com/watch?v=2VYBQ_99RJg&ab_channel=%ED%99%8D%ED%8C%8D) 참고

