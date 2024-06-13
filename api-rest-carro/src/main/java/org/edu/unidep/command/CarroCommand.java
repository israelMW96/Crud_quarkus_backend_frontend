package org.edu.unidep.command;

import java.math.BigDecimal;
import java.time.LocalDate;

public record CarroCommand(String nome, String marca, String cor, String ano, BigDecimal valor) {
}
