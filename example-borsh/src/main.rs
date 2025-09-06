use borsh::{BorshDeserialize, BorshSerialize, to_vec};

#[derive(Debug, BorshSerialize, BorshDeserialize)]

struct User {
    name: String,
    age: u32,
}

fn main() {
    let u = User {
        name: String::from("Jerry"),
        age: 30,
    };

    let bytes = to_vec(&u).unwrap(); // serialization
    let u2 = User::try_from_slice(&bytes).unwrap(); // deserialization
    println!("{:?}", bytes);
    println!("{:?}", u2);
}
