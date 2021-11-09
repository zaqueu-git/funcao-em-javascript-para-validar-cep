function cep(value) {
    if (/^[0-9]{2}[0-9]{3}-[0-9]{3}$/g.test(value)) {
        return true;
    };
    return false;
}