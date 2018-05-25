import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../service/reservation.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  reservationData$ = this.service.getAllReservation();

  constructor(private service: ReservationService) {
  }

  ngOnInit() {
  }

  acceptReservation() {
    this.service.acceptReservation().subscribe(() => {
      alert('Reservasi Berhasil Diterima');
      this.reservationData$ = this.service.getAllReservation();
    });
  }

  rejectReservation() {
    this.service.rejectReservation().subscribe(() => {
      alert('Reservasi Berhasil Ditolak');
      this.reservationData$ = this.service.getAllReservation();
    });
  }
}
